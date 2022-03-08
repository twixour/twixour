const Youtube = ({ embedId }) => {
  // https://www.youtube.com/watch?v=UPO7xvCxwDg
  // UPO7xvCxwDg
  return (
    <div className="mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className=" w-4/5 aspect-video"
      />
    </div>
  );
};

export default Youtube;
