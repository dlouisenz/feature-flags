import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import { FC } from 'react';

interface HomeProps {
  flags: any;
}

const TextFlag = () => {
  return <>Text Flag Enabled</>;
};

const TeamMenu = () => {
  return (
    <ul>
      <li>My Team</li>
      <li>Someone else's Team</li>
    </ul>
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
