import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import SelectedVideo from "./SelectedVideo";

const MainContainer = () => {
  const isSelected = useSelector((store) => store.selected.isSelected);
  return (
    <div className="">
      <ButtonList />
      {isSelected ? <SelectedVideo /> : <VideoContainer />}
    </div>
  );
};

export default MainContainer;
