import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/animation/Loading";
import InputText from "../components/field/InputText";
import InputTextarea from "../components/field/InputTextarea";
import moment from "moment";
// http://localhost:9999/

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameOperating, setNameOperating] = useState("");
  const [description, setDescription] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [memberMin, setMemberMin] = useState("");
  const [memberMax, setMemberMax] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stateOperating, setStateOperating] = useState("");

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
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9999/api/hoat-dong/${id}`
      );
      console.log("response: ", response.data);
      setData(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      if (error.response) {
        console.log("error.response:", error.response.data);
      }
    }
  };
  useEffect(() => {
    handleFetchData.current();
    return () => {};
  }, []);
  const update = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:9999/api/hoat-dong/${id}`,
        {
          tenHD: nameOperating || data.tenHD,
          moTaHD: description || data.moTaHD,
          ngayGioBD: startDay || data.ngayGioBD,
          ngayGioKT: endDay || data.ngayGioKT,
          slToiThieuYC: memberMin || data.slToiThieuYC,
          slToiDaYC: memberMax || data.slToiDaYC,
          thoiHanDK: deadline || data.thoiHanDK,
          trangThai: stateOperating || data.trangThai,
        }
      );
      navigate("/");
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
  // let dateStart = `${data.ngayGioBD.getDate()}-${
  //   data.ngayGioBD.getMonth() + 1
  // }-${data.ngayGioBD.getFullYear()}`;
  // let dateEnd = `${data.ngayGioKT.getDate()}-${
  //   data.ngayGioKT.getMonth() + 1
  // }-${data.ngayGioKT.getFullYear()}`;

  let dateStart = moment(data.ngayGioBD).format("YYYY-MM-DD");
  let dateEnd = moment(data.ngayGioKT).format("YYYY-MM-DD");
  console.log("date Start~~~", dateStart);
  console.log("date End~~~", dateEnd);

  // console.log("value.......", data.moTaHD);
  return (
    <Fragment>
      {loading && <Loading></Loading>}
      {!loading && (
        <section className="page-container mb-10">
          <form action="PUT" onSubmit={update}>
            <InputText
              type="text"
              title="Operate"
              id="operate"
              placeholder="Please enter your operate..."
              value={data.tenHD}
              handle={handleNameOperating}
            ></InputText>
            <InputTextarea
              title="Description"
              id="description"
              placeholder="Please enter your description..."
              value={data.moTaHD}
              handle={handleDescription}
            ></InputTextarea>
            <InputText
              type="date"
              title="Start"
              id="dayStart"
              value={dateStart}
              handle={handleStartDay}
            ></InputText>
            <InputText
              type="date"
              title="End"
              id="dayEnd"
              value={dateEnd}
              handle={handleEndDay}
            ></InputText>
            <InputText
              type="number"
              title="Min member"
              id="min"
              placeholder="Please enter your min member..."
              value={data.slToiThieuYC}
              handle={handleMemberMin}
            ></InputText>
            <InputText
              type="number"
              title="Max member"
              id="max"
              placeholder="Please enter your max member..."
              value={data.slToiDaYC}
              handle={handleMemberMax}
            ></InputText>
            <InputText
              type="number"
              title="Deadline"
              id="dealine"
              placeholder="Please enter your dealine operate..."
              value={data.thoiHanDK}
              handle={handleDeadline}
            ></InputText>
            <InputText
              type="number"
              title="Status"
              id="status"
              placeholder="Please enter your status..."
              value={data.trangThai}
              handle={handleStateOperating}
            ></InputText>
            {/* <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                Tên hoạt động:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.tenHD}
                onChange={handleNameOperating}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                Description:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.moTaHD}
                onChange={handleDescription}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                Start:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.ngayGioBD}
                onChange={handleStartDay}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                End:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.ngayGioKT}
                onChange={handleEndDay}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                Min:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.slToiThieuYC}
                onChange={handleMemberMin}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                Max:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.slToiDaYC}
                onChange={handleMemberMax}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="thoiHan" className="cursor-pointer">
                Deadline:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="thoiHan"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.thoiHanDK}
                onChange={handleDeadline}
              />
            </div> */}
            {/* <div className="mt-5">
              <label htmlFor="ten-hoat-dong" className="cursor-pointer">
                State:
              </label>
              <input
                type="text"
                placeholder="Please..."
                id="ten-hoat-dong"
                className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
                defaultValue={data.trangThai}
                onChange={handleStateOperating}
              />
            </div> */}
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

export default UpdatePage;
