import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({status}) => {
   return <span>
            <ThreeDots
               color="#3f51b5"
               wrapperStyle={{ justifyContent: 'center' }}
               visible={status === 'pending'}
            />
         </span >
}