export default function Post({ title, link, description, fotodescription }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={link} alt={fotodescription} />
      <p>{description}</p>
    </>
  );
}
