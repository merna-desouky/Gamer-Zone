import { Triangle } from 'react-loader-spinner';

function Loading() {
    return (
        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#fa5950"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}

export default Loading;
