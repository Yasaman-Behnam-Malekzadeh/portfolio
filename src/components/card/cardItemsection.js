import CardItem from "./cardItem";

function CardItemEducation({ info, title }) {
  return (
    <div className="card-item-section container pb-3">
      <div className="card-item-section__title fs-3 mb-5">{title}</div>
      <div className="card-item-section__items">
        {info.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            position={item.position}
            start_date={item.start_date}
            end_date={item.end_date}
            description={item.description}
            linkedin_address={item.linkedin_address}
            website_address={item.website_address}
            logo_address={item.logo_address}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default CardItemEducation;
