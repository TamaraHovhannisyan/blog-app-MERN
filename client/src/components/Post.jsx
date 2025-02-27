

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/10/GettyImages-1883327378-e1730136121848.jpg?resize=1536,1025"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>Microsoft is forming a new unit to study AI’s impacts</h2>
        <p className="info">
          <a className="autor">Gago dzya </a>
          <time>2025-02-27 14:38</time>
        </p>
        <p className="summary">
          Microsoft says that its creating a new unit, the Advanced Planning
          Unit (APU), within its Microsoft AI business division that will help
          the company understand the societal,{" "}
        </p>
      </div>
    </div>
  );
}

export default Post