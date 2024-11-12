import React, { useEffect, useState } from "react";
// import Dashboardcard from "../dashboardcard/dashboardcard";
import Bookcard from "../bookcard/bookcard";
import axios from "axios";
import { Modal } from "antd";
import "./orderModal.scss";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PaymentButton from "../transactionPayment/payment-button";
import DDown from "../settings/DDown";

function Book() {
  const [eBooks, setEBooks] = useState([]);
  const [hardBooks, setHardBooks] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/book/all-FU`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEBooks(res.data.filter((book) => book.isDigital));
        setHardBooks(res.data.filter((book) => !book.isDigital));
        setIsModalOpen(false);
        setIsDetailModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reFetch]);

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

  const startCheckout = (bookId) => {
    setSelectedBook(bookId);
    setIsDetailModalOpen(false);
    setIsModalOpen(true);
  };

  const bookDetails = hardBooks?.find((item) => item._id === selectedBook);

  return (
    <div className="dashside-content">
      <div className="noti">
        <DDown />
      </div>
      <section className="merchandisedash-sec">
        <h2 className="text-white textexpansiva-bold text-uppercase mb-10">
          Book
        </h2>

        <div className="sec-header">
          <div className="left">
            <h5 className="textexpansiva-bold">Hard Copy</h5>
          </div>
        </div>
        <div className="merchandise-cards">
          {hardBooks?.map((item, index) => (
            <Bookcard
              key={index}
              bookId={item._id}
              imgsrc={item.coverImageUrl}
              detail={item.title}
              authors={item.authors}
              price={item.price}
              showlayer={item.showlayer}
              isDigital={item.isDigital}
              isPurchased={item.isPurchased}
              setReFetch={setReFetch}
              startCheckout={startCheckout}
            />
          ))}
        </div>
        <div className="sec-header">
          <div className="left">
            <h5 className="textexpansiva-bold">E-book</h5>
          </div>
        </div>
        <div className="merchandise-cards">
          {eBooks?.map((item, index) => (
            <Bookcard
              key={index}
              imgsrc={item.coverImageUrl}
              detail={item.title}
              authors={item.authors}
              price={item.price}
              showlayer={item.showlayer}
              isDigital={item.isDigital}
              bookId={item._id}
              isPurchased={item.isPurchased}
              setReFetch={setReFetch}
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
                  <img src={bookDetails?.coverImageUrl || ""} alt="" />
                  <div className="d-flex flex-column ">
                    <p>{bookDetails?.title || ""}</p>
                    <p className="smallp">{bookDetails?.description || ""}</p>
                  </div>
                </div>
                <p>{bookDetails?.price || 0} BNB</p>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end">
              <PaymentButton
                amount={bookDetails?.price}
                network="bscTestnet"
                type={"hardBook"}
                itemId={bookDetails?._id}
                tokenAddress={null}
                tokenDecimals={18}
                setReFetch={setReFetch}
                addressData={{address: watch("address"), firstName: watch("firstName"), lastName: watch("lastName"), phoneNumber: watch("phoneNumber"), postalCode: watch("postalCode")}}
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

export default Book;
