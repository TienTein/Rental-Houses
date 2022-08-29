import Header from "./global-components/Header";
import Item from "./shop-components/Item";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import usePagination from "./shop-components/Pagination";
import Discover from "./global-components/Discover";
import Footer from "./global-components/Footer";
import SimpleBreadcrumbs from "./global-components/SimpleBreadcrumbs";
import { useState, useEffect } from "react";
import Breadcrumb from "../components/detailpage/BreadCrump";
import { Link } from "react-router-dom";
import { onSnapshot, collection } from "@firebase/firestore";
import { db } from "../firebase/config";

function Shop() {
  const [page, setPage] = useState(1);
  const [dbDatas, setDBDatas] = useState([]);
  const colRef = collection(db, "HouseDetail");
  const PER_PAGE = 6;
  const count = Math.ceil(dbDatas.length / PER_PAGE);
  const _DATA = usePagination(dbDatas, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    async function getData() {
      onSnapshot(colRef, (snapshot) => {
        let housedetail = [];
        snapshot.docs.forEach((doc) => {
          housedetail.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDBDatas(housedetail);
      });
    }
    getData();
  }, []);

  dbDatas.sort((a, b) => a.id - b.id); // sort data by id

  // tinh so page
  return (
    <div className="Shop">
      <Header />
      <SimpleBreadcrumbs title="Danh sách nhà ở" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 3,
          m: 1,
          marginBlock: 7,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        {_DATA.currentData().map((house) => {
          return (
            <Link to={`/detail/${house.id}`} key={house.id}>
              <Item
                name={house.name}
                userId={house?.userId}
                area={house.area}
              ></Item>
            </Link>
          );
        })}
      </Box>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 8,
        }}
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        color="primary"
      />
      <Discover />
      <Footer />
    </div>
  );
}
export default Shop;
