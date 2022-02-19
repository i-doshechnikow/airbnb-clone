function InfoCard({ img, location, description, star, price, total }) {
  return (
    <div>
      {location}
      <p>{description}</p>
    </div>
  )
}

export default InfoCard
