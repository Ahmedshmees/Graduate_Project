import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Predict from "../assets/image/predict.png";
import Sick from "../assets/image/sick.png";
import Healthy from "../assets/image/healthy.png";
import "../App.css";

const Prediction = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heartDisease: "",
    smoking: "",
    bmi: "",
    hba1c: "",
    glucose: "",
  });

  const [isSick, setIsSick] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sick =
      Number(formData.hypertension) === 1 ||
      Number(formData.heartDisease) === 1 ||
      Number(formData.bmi) > 30 ||
      Number(formData.hba1c) > 6.5 ||
      Number(formData.glucose) > 140;

    setIsSick(sick);
  };

  // useEffect(() => {
  //   if (isSick) {
  //     const timer = setTimeout(() => {
  //       navigate("/mistral");
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isSick, navigate]);

  useEffect(() => {
  if (isSick) {
    const timer = setTimeout(() => {
      window.location.href = "https://diabetic-prediction-system.streamlit.app/";
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [isSick]); 


  return (
    <div>
      <Nav />
      <div className="contpre d-flex">
        <div className="form w-50 p-4">
          <form onSubmit={handleSubmit} data-aos="fade-down">
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select the Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Hypertension</label>
              <select
                className="form-select"
                name="hypertension"
                value={formData.hypertension}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select the Hypertension
                </option>
                <option value="0">False</option>
                <option value="1">True</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Heart Disease</label>
              <select
                className="form-select"
                name="heartDisease"
                value={formData.heartDisease}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select the Heart Disease
                </option>
                <option value="0">False</option>
                <option value="1">True</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Smoking History</label>
              <select
                className="form-select"
                name="smoking"
                value={formData.smoking}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select the Smoking History
                </option>
                <option value="never">Never</option>
                <option value="former">Former</option>
                <option value="current">Current</option>
                <option value="ever">Ever</option>
                <option value="no_info">No info</option>
                <option value="not_current">Not current</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">BMI</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter BMI"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">HbA1c Level</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="Enter HbA1c Level"
                name="hba1c"
                value={formData.hba1c}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Blood Glucose Level</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Blood Glucose Level"
                name="glucose"
                value={formData.glucose}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-warning px-4">
              Predict
            </button>
          </form>
        </div>

        <div
          data-aos="fade-up"
          className="image w-50 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            src={isSick === null ? Predict : isSick ? Sick : Healthy}
            alt="prediction"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "400px",
            }}
          />

          {isSick !== null && (
            <div
              className={`result-message mt-3 ${
                isSick ? "text-danger" : "text-success"
              }`}
            >
              {isSick ? (
                <>
                  Risk Detected. Run a lab test with our AI tool . Redirecting
                  🤖
                  <span className="dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </>
              ) : (
                "✅ You're good! Stay healthy"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prediction;
