import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import { FC } from 'react';

interface HomeProps {
  flags: any;
}

const TextFlag = () => {
  return (
    <>
      <h3>Text Flag Enabled</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  );
};

const TeamMenu = () => {
  return (
    <>
      <h3>Team menu flag enabled</h3>
      <ul>
        <li>My Team</li>
        <li>Someone else's Team</li>
      </ul>
    </>
  );
};

const Home: FC<HomeProps> = ({ flags }) => {
  return (
    <>
      <header>{flags.teamMenu && <TeamMenu />}</header>
      {flags.text && <TextFlag />}
    </>
  );
};

export default withLDConsumer()(Home);
