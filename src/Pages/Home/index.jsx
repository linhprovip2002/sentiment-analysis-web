import * as React from "react";
import style from "./home.module.scss";
import classNames from "classnames/bind";
import Convo from "../../Components/convo/convo";
import sentimentAnalysis from "../../Services/API/sentiment";
import {
  Select,
  useId,
  Field,
  makeStyles,
  // mergeClasses,
  tokens,
  Textarea
} from "@fluentui/react-components";

const cx = classNames.bind(style);

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
  inverted: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  invertedLabel: {
    color: tokens.colorNeutralForegroundInverted2,
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
  },
});

function Home() {
  const [selectedOption, setSelectedOption] = React.useState(""); // State to store the selected option
  const [inputText, setInputText] = React.useState(""); // State to store the input text
  const [sentimentResult, setSentimentResult] = React.useState(null); // State to store the sentiment analysis result
  const [history, setHistory] = React.useState([]); // State to store the sentiment analysis history

  const styles = useStyles();
  const selectId = useId();

  const data = [
    "Vay định cư của ngân hàng không dễ dàng các bạn ạ.",
    "Không tin tưởng vào ngân hàng BIDV",
    "Vậy tốt quá, giờ sử dụng thẻ an toàn và tiện lợi nữa."
  ];

  // Event handler when an option is selected
  const handleOptionClick = (item) => {
    setSelectedOption(item);
    setInputText(item); // Update the textarea with the selected option
  };

  // Event handler for textarea change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Event handler for sentiment analysis button click
  const handleDetectSentiment = async () => {
    try {
      const response = await sentimentAnalysis(inputText);
      console.log("Sentiment analysis result:", response);
      setSentimentResult(response);
      setHistory((prevHistory) => [
        {
          text: inputText,
          sentiment: response.sentiment,
          accuracy: response.accuracy,
        },
        ...prevHistory
      ]);

    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    handleOptionClick(selectedValue);
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
          <div className={cx("input_text-container")}>
            <div className={cx("input_text_aria-container")}>
              <Field label="Text">
                <Textarea
                  appearance="outline"
                  placeholder="type here..."
                  resize="both"
                  value={inputText}
                  onChange={handleInputChange}
                />
              </Field>
              {/* Display selected content in textarea */}
            </div>
            <div className={cx("input_option-container")}>
              <label htmlFor={selectId}>Choose an example</label>
              <Select id={selectId} onChange={handleChange}>
                {data.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className={cx("home-button")}>
            <button className={cx("button-detect")} onClick={handleDetectSentiment}>
              Detect Sentiment
            </button>
          </div>
          <div className={cx("home-footer")}>
            <p>Output</p>
            {/* Display sentiment analysis result */}
            {sentimentResult && (
              <Convo
                selectedText={inputText}
                selectedSentiment={sentimentResult.sentiment}
                accuracy={sentimentResult.accuracy}
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
                  accuracy={item.accuracy}
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
