import './TrendingCard.css'


function TrendingCard({ trending_card_info }) {
    return (
        <div className='trending_card' >
            <img src={trending_card_info.img} alt="" />
            <span>{trending_card_info.price}</span>
            <h6>{trending_card_info.title}</h6>
            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7598 13.4306C13.4483 13.4306 14.8172 12.0337 14.8172 10.3106C14.8172 8.58748 13.4483 7.19061 11.7598 7.19061C10.0712 7.19061 8.70233 8.58748 8.70233 10.3106C8.70233 12.0337 10.0712 13.4306 11.7598 13.4306Z" stroke="#222222" stroke-width="1.5" />
                <path d="M3.54752 8.49037C5.47801 -0.169631 18.0507 -0.159631 19.9714 8.50037C21.0983 13.5804 18.0017 17.8804 15.2872 20.5404C13.3175 22.4804 10.2013 22.4804 8.22185 20.5404C5.5172 17.8804 2.42058 13.5704 3.54752 8.49037Z" stroke="#222222" stroke-width="1.5" />
            </svg>
                {trending_card_info.location}</p>

        </div>
    )
}

export default TrendingCard