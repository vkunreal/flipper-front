import { Button } from '@/shared/ui/Button'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>

      <p>This is the project with dashboard with your todos.</p>

      <Button>
        <Link to="/dashboard">Go to dashboard</Link>
      </Button>
    </div>
  )
}
