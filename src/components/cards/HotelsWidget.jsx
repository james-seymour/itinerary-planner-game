
const HotelsWidget = ({ data }) => {
  const { destination, startDateString, endDateString } = data
  return (
    <div
      data-skyscanner-widget="HotelSearchWidget"
      data-locale="en-US"
      data-market="AU"
      data-currency="AUD"
      data-powered-by-size="0"
      data-destination-name={`'${destination}'`}
      data-hotel-check-in-date={`${startDateString}`}
      data-hotel-check-out-date={`${endDateString}`}
    ></div>
  )
}

export default HotelsWidget
