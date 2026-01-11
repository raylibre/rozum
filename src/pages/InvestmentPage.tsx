import { useNavigate } from 'react-router-dom'
import { InvestmentOpportunity } from '../components/investment'
import { investmentData } from '../data/investment-data'

export function InvestmentPage() {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

  return (
    <InvestmentOpportunity
      {...investmentData}
      onContactClick={handleContactClick}
    />
  )
}
