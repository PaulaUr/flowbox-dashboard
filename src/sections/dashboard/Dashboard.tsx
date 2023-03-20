import React, { useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import { TfiLayoutSliderAlt, TfiLayoutGrid2 } from "react-icons/tfi";
import { HiViewList } from "react-icons/hi";

import "./Dashboard.styles.scss";
import { Layout } from "../../components/Layout/Layout.component";
import { Loading } from "../../components/Loading/Loading.component";
import { useAppSelector } from "../../hooks/customHooks";
import { Button } from "../../components/Button/Button";
import { LayoutType } from "../../model/LayoutType";
import { selectProducts, selectStatus } from "../../slices";

const Dashboard = () => {
  const status = useAppSelector(selectStatus);
  const products = useAppSelector(selectProducts);
  const [layoutSelected, setLayoutSelected] = useState<LayoutType>(
    LayoutType.CARD
  );

  const handleTheIconClick = (layout: LayoutType) => {
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
    <div data-testid="Dashboard-component">
      <div className="Dashboard-layout-buttons">
        <Button
          data-testid="card-icon"
          isActive={layoutSelected === LayoutType.CARD && true}
          onClick={() => handleTheIconClick(LayoutType.CARD)}
        >
          <FaRegIdCard size={"2em"} />
        </Button>
        <Button
          data-testid="grid-icon"
          isActive={layoutSelected === LayoutType.GRID && true}
          onClick={() => handleTheIconClick(LayoutType.GRID)}
        >
          <TfiLayoutGrid2 size={"2em"} />
        </Button>
        <Button
          data-testid="list-icon"
          isActive={layoutSelected === LayoutType.LIST && true}
          onClick={() => handleTheIconClick(LayoutType.LIST)}
        >
          <HiViewList size={"2em"} />
        </Button>
        <Button
          data-testid="slide-icon"
          isActive={layoutSelected === LayoutType.CAROUSEL && true}
          onClick={() => handleTheIconClick(LayoutType.CAROUSEL)}
        >
          <TfiLayoutSliderAlt size={"2em"} />
        </Button>
      </div>
      <section>
        <Layout products={products} layout={layoutSelected} />
      </section>
    </div>
  );
};

export default Dashboard;
