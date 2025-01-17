import { Container, Card, Button } from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap'
{ 
// Importing react bootstrap components
}

const Hero = () => {
  return (
    <div className='py-5'>{
        //Padding and other styling properties applied to classes
    }
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>

          <div className='d-flex'>
            <LinkContainer to = '/login'>
            <Button variant='primary' className='me-3'>
              Sign In
            </Button>
            </LinkContainer>
            <LinkContainer to = '/register'>
            <Button variant='secondary'>
              Sign Up
            </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;