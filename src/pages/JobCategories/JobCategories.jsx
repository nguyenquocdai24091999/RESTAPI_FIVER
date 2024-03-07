 import React, { useContext, useEffect, useState } from 'react';

 import './jobCategories.scss';
import { NavLink, useParams } from 'react-router-dom';
import { jobService } from '../../services/job';
import { LoadingContext } from '../../contexts/Loading/Loading';

export default function JobCategories() {
  const params = useParams();

  const [jobCategories, setJobCategories] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchJobCategoriesById();
  }, [params.id]);

  const fetchJobCategoriesById = async () => {
    setLoadingState({ isLoading: true });

    const result = await jobService.fetchJobCategoriesByIdApi(params.id);
    setJobCategories(result.data.content);

    setLoadingState({ isLoading: false });
  };

  const renderJobTitle = () => {
    return jobCategories.map((element) => {
      const { tenLoaiCongViec, id } = element;

      return (
        <h1 className="title" key={id}>
          Explore {tenLoaiCongViec}
        </h1>
      );
    });
  };

  const renderExploreContent = () => {
    return jobCategories.map((element) => {
      console.log("jobCategories", jobCategories);
      return element.dsNhomChiTietLoai.map((element) => {
        const { id, hinhAnh, tenNhom, dsChiTietLoai } = element;

        return (
          <div className="explore__item" key={id}>
            <img src={hinhAnh} alt="" />
            <h1>{tenNhom}</h1>
            {dsChiTietLoai.map((element) => {
              const { id, tenChiTiet } = element;

              return (
                <p key={id}>
                  <NavLink to={`/categories-detail/${id}`}>
                    {tenChiTiet}
                  </NavLink>
                </p>
              );
            })}
          </div>
        );
      });
    });
  };

  return (
    <>
      <div className="job-categories-banner">
        <div className="banner__container">
          <div className="banner__content d-flex align-items-center justify-content-center flex-column h-100">
            <h1>{jobCategories[0]?.tenLoaiCongViec}</h1>
            <p>Designs to make you stand out.</p>
            <button className="btn btn-outline-light">
              <i className="fa-regular fa-circle-play" />
              <span>How Fiverr Works</span>
            </button>
          </div>
        </div>
      </div>

      <div className="job-categories-popular">
        <div className="container mt-lg-5 mt-sm-3 mb-lg-5 mb-sm-3">
          <h1>Most popular in {jobCategories[0]?.tenLoaiCongViec}</h1>
          <div className="popular__content">
            <div className="popular__item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                alt=""
              />
              <span>Minimalist Logo Design</span>
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="popular__item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                alt=""
              />
              <span>Architecture & Interior Design</span>
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="popular__item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                alt=""
              />
              <span>Image Editing</span>
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="popular__item">
              <img
                src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
                alt=""
              />
              <span>NFT Art</span>
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="popular__item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                alt=""
              />
              <span>T-Shirts & Merchandise</span>
              <i className="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>

      <div className="job-categories-explore">
        <div className="container">
          {renderJobTitle()}
          <div className="explore__content">
            {jobCategories.length !== 0 ? renderExploreContent() : <></>}
          </div>
        </div>
      </div>

      <div className="services-related">
        <div className="container mt-lg-5 mb-lg-5 mt-md-4 mb-md-4 mt-sm-2 mb-sm-2 text-center">
          <h1 className="mb-lg-5 mb-md-4 mb-sm-2">
            Services Related To {jobCategories[0]?.tenLoaiCongViec}
          </h1>
          <div className="services-related__content d-flex align-items-center justify-content-center flex-wrap">
            <span>Minimalist Logo Design</span>
            <span>Signature Logo Design</span>
            <span>Mascot Logo Design</span>
            <span>3D Logo Design</span>
            <span>Hand Drawn Logo Design</span>
            <span>Vintage Logo Design</span>
            <span>Remove Background</span>
            <span>Photo Restoration</span>
            <span>Photo Retouching</span>
            <span>Image Resize</span>
            <span>Product Label Design</span>
            <span>Custom Twitch Overlay</span>
            <span>Custom Twitch Emotes</span>
            <span>Gaming Logo</span>
            <span>Children Book Illustration</span>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { jobService } from "../../services/job";

// export default function JobCategories() {
//   const params = useParams();
//   console.log("params", params);

//   const [jobCategories, setjobCategories] = useState();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   useEffect(() => {
//     fetchJobCategories();
//   }, []);
//   const fetchJobCategories = async () => {
//     const result = await jobService.fetchJobCategoriesByIdApi(params.id);
//     setjobCategories(result.data.content);
//   };

//   const renderJobTitle = () => {
//     return jobCategories.map((element) => {
//       const { tenLoaiCongViec, id } = element;
//       return (
//         <h1 className="title" key={id}>
//           Explore {tenLoaiCongViec}
//         </h1>
//       );
//     });
//   };
//   const renderExploreContent = () => {
//     return jobCategories.map((element) => {
//       return element.dsNhomChiTietLoai.map((element) => {
//         const { id, hinhAnh, tenNhom, dsChiTietLoai } = element;
//         return (
//           <div className="explore__content" key={id}>
//             <img src={hinhAnh} alt="" />
//             <h1>{tenNhom}</h1>
//             {dsChiTietLoai.map((ele) => {
//               const { id, tenChiTiet } = ele;
//               return (
//                 <p>
//                   <NavLink to={`/categories-detail/${id}`}>
//                     {tenChiTiet}
//                   </NavLink>
//                 </p>
//               );
//             })}
//           </div>
//         );
//       });
//     });
//   };

//   return (
//     <>
//       <div className="job-categories-banner">
//         {" "}
//         <div className="banner__container">
//           {" "}
//           <div className="banner__content d-flex align-items-center justify-content-center flex-column h-100">
//              <h1>{jobCategories[0]?.tenLoaiCongViec}</h1>
//             <p>Designs to make you stand out.</p>
//             {" "}
//             <button className="btn btn-outline-light">
//                <i className="fa-regular fa-circle-play" />
//                <span>How Fiverr Works</span>
//               {" "}
//             </button>
//             {" "}
//           </div>
//           {" "}
//         </div>
//         {" "}
//       </div>
//       {" "}
//       <div className="job-categories-popular">
//         {" "}
//         <div className="container mt-lg-5 mt-sm-3 mb-lg-5 mb-sm-3">
//            <h1>Most popular in {jobCategories[0]?.tenLoaiCongViec}</h1>
//           {" "}
//           <div className="popular__content">
//             {" "}
//             <div className="popular__item">
//               {" "}
//               <img
//                 src="https:fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
//                 alt=""
//               />
//               <span>Minimalist Logo Design</span>
//               <i className="fa-solid fa-arrow-right" />
//             </div>
//             <div className="popular__item">
//               <img
//                 src="https:fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
//                 alt=""
//               />
//               <span>Architecture & Interior Design</span>
//               <i className="fa-solid fa-arrow-right" />
//             </div>
//             <div className="popular__item">
//               <img
//                 src="https:fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
//                 alt=""
//               />
//               <span>Image Editing</span>
//               <i className="fa-solid fa-arrow-right" />
//             </div>
//             <div className="popular__item">
//               <img
//                 src="https:fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
//                 alt=""
//               />
//               <span>NFT Art</span>
//               <i className="fa-solid fa-arrow-right" />
//             </div>
//             <div className="popular__item">
//               <img
//                 src="https:fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
//                 alt=""
//               />
//               <span>T-Shirts & Merchandise</span>
//               <i className="fa-solid fa-arrow-right" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="job-categories-explore">
//         <div>
//           {renderJobTitle()}
//           <div className="explore__content">
//             {jobCategories.length !== 0 ? renderExploreContent() : <></>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
