import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/animation/Loading";

const Homepage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9999/api/hoat-dong");
      console.log("response: ", response.data);
      setData(response.data);
      if (response.data) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
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
  const remove = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:9999/api/hoat-dong/${id}`
      );
      console.log("response: ", response.data);
      setData(response.data);
      if (response.data) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
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
        <section>
          <div className="text-center text-xl mb-10">
            <h1>
              Vẫn Delete được nha Thầy, những bị lỗi data.map, Em chưa fix được
              ạ ^_^
            </h1>
            <span>Refresh browser - là thấy dữ liệu đã mất</span>
          </div>
          <table className="p-5 mx-auto border-collapse border border-slate-500">
            <thead className="p-5">
              <tr className="p-5">
                <th className="text-center border border-slate-600 px-5">
                  Name Operating
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Description
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Start
                </th>
                <th className="text-center border border-slate-600 px-5">
                  End
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Min
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Max
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Deadline
                </th>
                <th className="text-center border border-slate-600 px-5">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr className="p-50" key={item._id}>
                    <td className="py-10 px-2 border border-slate-600">
                      {item.tenHD}
                    </td>
                    <td className="description py-10 px-2 border border-slate-600 max-w-[50px]">
                      {item.moTaHD}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.ngayGioBD}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.ngayGioKT}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.slToiThieuYC}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.slToiDaYC}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.thoiHanDK}
                    </td>
                    <td className="py-10 px-2 text-center border border-slate-600">
                      {item.trangThai}
                    </td>
                    <td
                      onClick={() => navigate(`edit/${item._id}`)}
                      className="border border-slate-600 px-5 cursor-pointer hover:text-primary transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </td>
                    <td
                      className="border border-slate-600 px-5 cursor-pointer hover:text-primary transition-all"
                      onClick={() => remove(item._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      )}
    </Fragment>
  );
};

export default Homepage;
