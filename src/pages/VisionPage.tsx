import { useNavigate } from 'react-router-dom'
import { AIPoweredCityVision } from '../components/vision'
import { visionData } from '../data/vision-data'

export function VisionPage() {
  const navigate = useNavigate()

  const handleNavigate = (targetSection: string) => {
    if (targetSection === 'investment-opportunity') {
      navigate('/investment')
    } else if (targetSection === 'contact-engagement') {
      navigate('/contact')
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  const handleViewExpert = (expertId: string) => {
    // For MVP: just log it
    // Future: could show a modal or navigate to expert detail page
    console.log('View expert:', expertId)
  }

  return (
    <AIPoweredCityVision
      {...visionData}
      onNavigate={handleNavigate}
      onViewExpert={handleViewExpert}
    />
  )
}
