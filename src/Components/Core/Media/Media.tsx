import { mediaData } from "../../../data/MediaData";

export default function Media() {
  return (
    <div className="Media">
      <h3>WE ARE SOCIAL</h3>
      <div className="media_box">
        {mediaData.map((item, index) => {
          return <img key={index} src={item.icons} alt="icon" />;
        })}
      </div>
    </div>
  );
}
