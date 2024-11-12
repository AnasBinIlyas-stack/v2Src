import React, { useEffect, useRef, useState } from "react";
import "./merchandise2.scss";
import Dashboardcard from "../dashboardcard/dashboardcard";
import Dashdrop from "../dashdrop/dashdrop";
import axios from "axios";
import DDown from "../settings/DDown";
import { useLocation } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PaymentButton from "../transactionPayment/payment-button";
import { Modal } from "antd";
import "./orderModal.scss";

function Merchandise2({ head, subhead }) {
  const { pathname } = useLocation();
  const [categories, setCategories] = useState(false);
  const [data, setData] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const timeRef = useRef(null);
  const categoriesRef = useRef(null);
  const [time, setTime] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleCategories = () => {
    setCategories(!categories);
  };

  const handleTime = () => {
    setTime(!time);
  };

  const categoriesData = [
    `T-Shirts`,
    `Mock's`,
    `Cap's`,
    `Hoodie's`,
    `Sticker's`,
    `Water Bottle`,
  ];
  const timeData = [`15 Minutes`, `30 Minutes`, `45 Minutes`];

  const handleOutsidecategories = (event) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target)
    ) {
      setCategories(false);
    }
  };

  const handleOutsidetime = (event) => {
    if (timeRef.current && !timeRef.current.contains(event.target)) {
      setTime(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsidecategories);
    document.addEventListener("mousedown", handleOutsidetime);
    return () => {
      document.removeEventListener("mousedown", handleOutsidecategories);
      document.removeEventListener("mousedown", handleOutsidetime);
    };
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setIsModalOpen(false);
    setIsDetailModalOpen(true);
  };

  const handleDetailCancel = () => {
    setIsDetailModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
  };

  const startCheckout = (productId) => {
    setSelectedProduct(productId);
    setIsDetailModalOpen(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/product/all`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
        setIsModalOpen(false);
        setIsDetailModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reFetch]);

  const checkoutSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    phoneNumber: z.number().min(1, { message: "Phone number is required" }),
    postalCode: z.string().min(1, { message: "Postal code is required" }),
    address: z.string().min(1, { message: "Address is required" }),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      postalCode: "",
      address: "",
    }
  });

  const productDetails = data?.find((item) => item._id === selectedProduct);

  return (
    <div className="dashside-content">
      {pathname === "/merchandise2" && (
        <div className="noti">
          <DDown />
        </div>
      )}
      <section className="merchandisedash-sec">
        <h2 className="text-white textexpansiva-bold text-uppercase mb-10">
          {head}
        </h2>
        <div className="sec-header">
          <div className="left">
            <h5 className="textexpansiva-bold"> {subhead} </h5>
          </div>
          <div className="right">
            <Dashdrop
              onClick={handleCategories}
              categories={categories}
              setCategories={setCategories}
              dropData={categoriesData}
              title={"Categories"}
              refCustom={categoriesRef}
            />
            <Dashdrop
              onClick={handleTime}
              categories={time}
              setCategories={setTime}
              dropData={timeData}
              title={"Last 15 Minutes"}
              refCustom={timeRef}
            />
          </div>
        </div>
        <div className="merchandise-cards">
          {data.map((item, index) => (
            <Dashboardcard
              key={index}
              imgsrc={item.imageUrl}
              detail={item.name}
              description={item.description}
              price={item.price}
              showlayer={item.showlayer}
              productId={item._id}
              startCheckout={startCheckout}
            />
          ))}
        </div>
        <Modal
          title="Check out"
          open={isDetailModalOpen}
          onCancel={handleDetailCancel}
          className="order-modal"
          centered
          width={738}
          height={518}
          footer={false}
          afterClose={handleDetailCancel}
        >
          <div className="body">
            <div className="bottom d-flex gap-2 mt-3" style={{ margin: "0px" }}>
              <p className="p">Checkout Details</p>
              <div className="detail-i">
                <div className="inner d-flex justify-content-between">
                  <p>First Name</p>
                  <p>{watch("firstName") || ""}</p>
                </div>
                <div className="inner d-flex justify-content-between">
                  <p>Last Name</p>
                  <p>{watch("lastName") || ""}</p>
                </div>
                <div className="inner d-flex justify-content-between">
                  <p>Phone Number</p>
                  <p>{watch("phoneNumber") || ""}</p>
                </div>
                <div className="inner d-flex justify-content-between">
                  <p>Postal Code</p>
                  <p>{watch("postalCode") || ""}</p>
                </div>
                <div className="inner d-flex justify-content-between">
                  <p>Address</p>
                  <p style={{ maxWidth: "55%" }}>{watch("address") || ""}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p>Item</p>
              <div className="t">
                <div className="first d-flex gap-3">
                  <img src={productDetails?.imageUrl || ""} alt="" />
                  <div className="d-flex flex-column ">
                    <p>{productDetails?.title || ""}</p>
                    <p style={{ fontSize: "12px" }}>{productDetails?.description || ""}</p>
                  </div>
                </div>
                <p>{productDetails?.price || 0} BNB</p>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end">
              <PaymentButton
                amount={productDetails?.price}
                network="bscTestnet"
                type={"product"}
                itemId={productDetails?._id}
                tokenAddress={null}
                tokenDecimals={18}
                setReFetch={setReFetch}
                addressData={{ address: watch("address"), firstName: watch("firstName"), lastName: watch("lastName"), phoneNumber: watch("phoneNumber"), postalCode: watch("postalCode") }}
              />
            </div>
          </div>
        </Modal>
        <Modal
          title="Check out"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="order-modal"
          centered
          width={738}
          footer={false}
          afterClose={handleClose}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
              <div className="input-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="mt-1" style={{ fontSize: "12px", color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="mt-1" style={{ fontSize: "12px", color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-field"
                  {...register("phoneNumber", { valueAsNumber: true })}
                />
                {errors.phoneNumber && (
                  <p className="mt-1" style={{ fontSize: "12px", color: "red" }}>{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="input-field"
                  {...register("postalCode")}
                />
                {errors.postalCode && (
                  <p className="mt-1" style={{ fontSize: "12px", color: "red" }}>{errors.postalCode.message}</p>
                )}
              </div>
              <div className="input-group full-width">
                <label>Address</label>
                <textarea
                  type="text"
                  placeholder="Your Address"
                  className="input-field"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="mt-1" style={{ fontSize: "12px", color: "red" }}>{errors.address.message}</p>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="next-button" type="submit">
                Next
              </button>
            </div>
          </form>
        </Modal>
      </section>
    </div>
  );
}

export default Merchandise2;
