import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { jobService } from '../../services/job';
import './categoriesDetail.scss';
import { LoadingContext } from '../../contexts/Loading/Loading';

export default function CategoriesDetail() {
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesList, setCategoriesList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchCategoriesDetailById();
  }, [params.id]);

  const fetchCategoriesDetailById = async () => {
    setLoadingState({ isLoading: true });

    const result = await jobService.fetchCategoriesDetailByIdApi(params.id);
    // console.log("result", result);

    setCategoriesList(result.data.content);

    setLoadingState({ isLoading: false });
  };

  const CARDS_PER_PAGE = 8;
  const totalPages = Math.ceil(categoriesList.length / CARDS_PER_PAGE);

  const getCurrentPageCards = () => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return categoriesList.slice(startIndex, endIndex);
  };
  // console.log("categories", categoriesList);
  const currentCards = getCurrentPageCards();

  const handleChangePage = (_, newPage) => {
    console.log("hello");
    setCurrentPage(newPage);

    window.scrollTo({
      top: document.querySelector('.categories-detail__content').offsetTop,
      behavior: 'smooth',
    });
  };

  const renderCardItem = () => {
    return currentCards?.map((element) => {
      console.log("ele", element);
      const { id, danhGia, giaTien, hinhAnh, tenCongViec, saoCongViec } =
        element.congViec;

      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={id}>
          <div className="card">
            <NavLink to={`/job-detail/${id}`}>
              <img className="card-img-top" src={hinhAnh} alt="" />
            </NavLink>
            <div className="card-body">
              <div className="seller-info">
                <div className="avatar">
                  <img src={element.avatar} alt="" />
                </div>
                <div className="info">
                  <h5>{element.tenNguoiTao}</h5>
                  <p>Level {saoCongViec} Seller</p>
                </div>
              </div>
              <div className="card-text">
                <NavLink to={`/job-detail/${id}`}>{tenCongViec}</NavLink>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star" />
                <span className="star-rate">{saoCongViec}</span>
                <span className="rating-amount">({danhGia})</span>
              </div>
            </div>
            <div className="card-footer">
              <i className="fa-solid fa-heart" />
              <div className="price">
                <p className="mr-1">STARTING AT</p>
                <span>US${giaTien}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="categories-detail">
      <div className="container">
        <div className="categories-detail__link">
          <ul className="d-flex align-items-center">
            <li>
              <a href="#">{categoriesList[0]?.tenLoaiCongViec}</a>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right" />
              <a href="#">{categoriesList[0]?.tenNhomChiTietLoai}</a>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right" />
              <a href="#">{categoriesList[0]?.tenChiTietLoai}</a>
            </li>
          </ul>
        </div>
        <div className="categories-detail__title">
          <span>{categoriesList[0]?.tenChiTietLoai}</span>
        </div>
        <div className="categories-detail__optionbar">
          <div className="left">
            <div className="dropdown ">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
              >
                Service Options
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item active" href="#">
                  All Categories
                </a>
                <a className="dropdown-item" href="#">
                  Web Programing
                  <span>(20,566)</span>
                </a>
                <a className="dropdown-item" href="#">
                  Data Entry
                  <span>(12,566)</span>
                </a>
              </div>
            </div>
            <div className="dropdown ">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
              >
                Seller Details
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item active" href="#">
                  All Categories
                </a>
                <a className="dropdown-item" href="#">
                  Web Programing
                  <span>(20,566)</span>
                </a>
                <a className="dropdown-item" href="#">
                  Data Entry
                  <span>(12,566)</span>
                </a>
              </div>
            </div>
            <div className="dropdown ">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
              >
                Budget
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item active" href="#">
                  All Categories
                </a>
                <a className="dropdown-item" href="#">
                  Web Programing
                  <span>(20,566)</span>
                </a>
                <a className="dropdown-item" href="#">
                  Data Entry
                  <span>(12,566)</span>
                </a>
              </div>
            </div>
            <div className="dropdown ">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
              >
                Delivery Time
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item active" href="#">
                  All Categories
                </a>
                <a className="dropdown-item" href="#">
                  Web Programing
                  <span>(20,566)</span>
                </a>
                <a className="dropdown-item" href="#">
                  Data Entry
                  <span>(12,566)</span>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="switch1"
              />
              <label className="custom-control-label" htmlFor="switch1">
                Pro services
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="switch2"
              />
              <label className="custom-control-label" htmlFor="switch2">
                Local Sellers
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="switch3"
              />
              <label className="custom-control-label" htmlFor="switch3">
                Online Sellers
              </label>
            </div>
          </div>
        </div>
        <div className="categories-detail__sort py-3">
          <div className="categories-amount">
            <span>{categoriesList.length} services available</span>
          </div>
          <div className="sort-by">
            <span>Sort by</span>
            <select name="" id="">
              <option value="relevance">Relevance</option>
              <option value="bestselling">Best Selling</option>
              <option value="newarrival">New Arrivals</option>
            </select>
          </div>
        </div>
        <div className="categories-detail__content">
          <div className="row">{renderCardItem()}</div>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="standard"
            size="large"
            className="custom-pagination"
          />
        </div>
      </div>
    </div>
  );
}
