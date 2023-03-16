import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import Loading from "../components/animation/Loading";
import InputText from "../components/field/InputText";
import InputTextarea from "../components/field/InputTextarea";
// http://localhost:9999/

const CreatePage = () => {
  const [nameOperating, setNameOperating] = useState("");
  const [description, setDescription] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [memberMin, setMemberMin] = useState("");
  const [memberMax, setMemberMax] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stateOperating, setStateOperating] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(
    "value:~ ",
    nameOperating,
    description,
    startDay,
    endDay,
    memberMin,
    memberMax,
    deadline,
    stateOperating
  );

  const handleNameOperating = (e) => {
    setNameOperating(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleStartDay = (e) => {
    setStartDay(e.target.value);
  };
  const handleEndDay = (e) => {
    setEndDay(e.target.value);
  };
  const handleMemberMin = (e) => {
    setMemberMin(e.target.value);
  };
  const handleMemberMax = (e) => {
    setMemberMax(e.target.value);
  };
  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  };
  const handleStateOperating = (e) => {
    setStateOperating(e.target.value);
  };
  const create = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:9999/api/hoat-dong", {
        tenHD: nameOperating,
        moTaHD: description,
        ngayGioBD: startDay,
        ngayGioKT: endDay,
        slToiThieuYC: memberMin,
        slToiDaYC: memberMax,
        thoiHanDK: deadline,
        trangThai: stateOperating || 0,
      });
      if (response.data) {
        setNameOperating("");
        setDescription("");
        setStartDay("");
        setEndDay("");
        setMemberMin("");
        setMemberMax("");
        setStateOperating("");
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
      console.log("response:", response.data);
    } catch (error) {
      if (error.response) {
        console.log("error.response:", error.response.data);
      }
    }
  };
  return (
    <Fragment>
      {loading && <Loading></Loading>}
      {!loading && (
        <section className="page-container mb-10">
          <form action="POST" onSubmit={create}>
            <InputText
              type="text"
              title="Operate"
              id="operate"
              placeholder="Please enter your operate..."
              handle={handleNameOperating}
            ></InputText>
            <InputTextarea
              title="Description"
              id="description"
              placeholder="Please enter your description..."
              handle={handleDescription}
            ></InputTextarea>
            <InputText
              type="date"
              title="Start"
              id="dayStart"
              handle={handleStartDay}
            ></InputText>
            <InputText
              type="date"
              title="End"
              id="dayEnd"
              handle={handleEndDay}
            ></InputText>
            <InputText
              type="number"
              title="Min member"
              id="min"
              placeholder="Please enter your min member..."
              handle={handleMemberMin}
            ></InputText>
            <InputText
              type="number"
              title="Max member"
              id="max"
              placeholder="Please enter your max member..."
              handle={handleMemberMax}
            ></InputText>
            <InputText
              type="number"
              title="Deadline"
              id="dealine"
              placeholder="Please enter your dealine operate..."
              handle={handleDeadline}
            ></InputText>
            <InputText
              type="number"
              title="Status"
              id="status"
              placeholder="Please enter your status..."
              value={0}
              handle={handleStateOperating}
            ></InputText>
            <button
              className="w-full h-[50px] mt-5 bg-primary rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default CreatePage;
