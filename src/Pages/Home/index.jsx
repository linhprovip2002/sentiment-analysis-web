import style from "./home.module.scss";
import classNames from "classnames/bind";
import * as React from "react";
import Convo from "../../Components/convo/convo";
import sentimentAnalysis from "../../Services/API/sentiment";
const cx = classNames.bind(style);

function Home() {
  const [selectedOption, setSelectedOption] = React.useState(""); // State để lưu trữ mục đã chọn
  const [inputText, setInputText] = React.useState(""); // State để lưu trữ nội dung nhập vào textarea
  const [sentimentResult, setSentimentResult] = React.useState(null); // State để lưu trữ kết quả phân tích cảm xúc
  const [history, setHistory] = React.useState([]); // State để lưu trữ lịch sử phân tích cảm xúc

  const data = [
    "Vay định cư của ngân hàng không dễ dàng các bạn ạ.",
    "Không tin tưởng vào ngân hàng BIDV",
    "Vậy tốt quá, giờ sử dụng thẻ an toàn và tiện lợi nữa."
  ];

  // Hàm xử lý sự kiện khi chọn một mục trong danh sách options
  const handleOptionClick = (item) => {
    setSelectedOption(item);
    setInputText(item); // Cập nhật nội dung đã chọn vào textarea khi chọn một mục
  };

  // Hàm xử lý sự kiện khi người dùng thay đổi nội dung của textarea
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Hàm xử lý sự kiện khi nhấn nút phân tích cảm xúc
  const handleDetectSentiment = async () => {
    try {
      const response = await sentimentAnalysis(inputText);
      console.log("Sentiment analysis result:", response);
      setSentimentResult(response);
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          text: inputText,
          sentiment: response.sentiment,
          accuracy: response.accuracy,
        },
      ]);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  return (
    <div className={cx("wrap-home")}>
      <div className={cx("container-home")}>
        <div className={cx("home-header")}></div>
        <div className={cx("home-content-1")}>
          <h3>Sentiment Analysis</h3>
          <p>Vietnamese Aspect Sentiment Analysis</p>
        </div>
        <hr />
        <div className={cx("home-content-2")}>
          <p>Text</p>
          <div className={cx("input_text-container")}>
            <div className={cx("input_text_aria-container")}>
              <textarea
                className={cx("input_text_area")}
                value={inputText}
                onChange={handleInputChange}
              ></textarea>
              {/* Hiển thị nội dung đã chọn trong textarea */}
            </div>
            <div className={cx("input_option-container")}>
              <p>Choose an example</p>
              <ul className={cx("item-option")}>
                {data.map((item, index) => (
                  <li
                    className={cx("item-option-choose")}
                    key={index}
                    onClick={() => handleOptionClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cx("home-button")}>
            <button className={cx("button-detect")} onClick={handleDetectSentiment}>
              Detect Sentiment
            </button>
          </div>
          <div className={cx("home-footer")}>
            <p>Output</p>
            {/* Hiển thị kết quả phân tích cảm xúc */}
            {sentimentResult && (
              <Convo
                selectedText={inputText}
                selectedSentiment={sentimentResult.sentiment}
                accuracy={`${sentimentResult.accuracy}%`}
              />
            )}
          </div>
          <hr />
          <div className={cx("history-convo")}>
            <span>History sentiment Analysis </span>
            <div className={cx("history-convo-list")}>
              {history.map((item, index) => (
                <Convo
                  key={index}
                  selectedText={item.text}
                  selectedSentiment={item.sentiment}
                  accuracy={`${item.accuracy}%`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
