import "./styles.css";


type Props = {
  videoIds: string[];
};

export function Videos({
  videoIds,
}: Props) {
  return (videoIds.map((videoId) => (
    <iframe
          id="ytplayer"
          className={"ytplayer"}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>
  )));
}