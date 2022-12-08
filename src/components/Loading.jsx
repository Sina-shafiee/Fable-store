import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <ThreeDots
      height='60'
      width='60'
      radius='9'
      color='#000000'
      ariaLabel='three-dots-loading'
      wrapperStyle={{}}
      wrapperClassName=''
      visible={true}
    />
  );
};

export default Loading;
