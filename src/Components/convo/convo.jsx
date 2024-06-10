import style from "./convo.module.scss";
import classNames from "classnames/bind";
import * as React from "react";
import {
    Tag,
    TagLabel,
    CircularProgress,
    CircularProgressLabel
} from '@chakra-ui/react';

const cx = classNames.bind(style);

function Convo({ selectedText, selectedSentiment, accuracy }) {
    const isPositive = selectedSentiment === "positive";

    return (
        <div className={cx("wrap-convo")}>
            <div className={cx("container-convo")}>
                <div className={cx("convo-content")}>
                    <p>Text: </p>
                    <span>{selectedText}</span>
                </div>
                <div className={cx("convo-valuation")}>
                    <p>Sentiment: </p>
                    <Tag>
                        <TagLabel className={cx("label-sentiment", { "positive": isPositive, "negative": !isPositive })}>
                            {selectedSentiment}
                        </TagLabel>
                    </Tag>
                    <CircularProgress value={accuracy} color='green.400'>
                        <CircularProgressLabel>{accuracy}%</CircularProgressLabel>
                    </CircularProgress>
                </div>
            </div>
        </div>
    );
}

export default Convo;
