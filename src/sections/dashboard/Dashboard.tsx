import React, { useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import { TfiLayoutSliderAlt, TfiLayoutGrid2 } from "react-icons/tfi";
import { HiViewList } from "react-icons/hi";

import "./Dashboard.styles.scss";
import { Layout } from "../../components/Layout/Layout.component";
import { Loading } from "../../components/Loading/Loading.component";
import { RootState } from "../../config/store";
import { useAppSelector } from "../../hooks/customHooks";
import { Button } from "../../components/Button/Button";
import { LayoutType } from "../../model/LayoutType";

const Dashboard = () => {
  const store = useAppSelector((state: RootState) => state.products);
  const { products, status } = store;
  const [layoutSelected, setLayoutSelected] = useState<LayoutType>(
    LayoutType.CARD
  );

  const handleGrid = (layout: LayoutType) => {
    setLayoutSelected(layout);
  };

  if (status === "loading") {
    return (
      <div className="Dashboard-loading">
        {status === "loading" && <Loading />}
      </div>
    );
  }

  return (
    <>
      <div className="Dashboard-layout-buttons">
        <Button
          isActive={layoutSelected === LayoutType.CARD && true}
          onClick={() => handleGrid(LayoutType.CARD)}
        >
          <FaRegIdCard size={"2em"} />
        </Button>
        <Button
          isActive={layoutSelected === LayoutType.GRID && true}
          onClick={() => handleGrid(LayoutType.GRID)}
        >
          <TfiLayoutGrid2 size={"2em"} />
        </Button>
        <Button
          isActive={layoutSelected === LayoutType.LIST && true}
          onClick={() => handleGrid(LayoutType.LIST)}
        >
          <HiViewList size={"2em"} />
        </Button>
        <Button
          isActive={layoutSelected === LayoutType.CAROUSEL && true}
          onClick={() => handleGrid(LayoutType.CAROUSEL)}
        >
          <TfiLayoutSliderAlt size={"2em"} />
        </Button>
      </div>
      <section>
        <Layout products={products} layout={layoutSelected} />
      </section>
    </>
  );
};

export default Dashboard;
