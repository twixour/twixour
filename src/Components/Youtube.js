const Youtube = ({ embedId }) => {
  // https://www.youtube.com/watch?v=UPO7xvCxwDg
  // UPO7xvCxwDg
  return (
    <div className=" aspect-w-16 aspect-h-9 ">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className=" top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default Youtube;
