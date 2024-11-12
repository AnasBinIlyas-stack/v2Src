import PropTypes from "prop-types";

function ZoomToolbar({ zoomIn, zoomOut }) {
    return (
        <div className="fixed right-10 bottom-10">
            <div className="bg-white p-2 text-2xl mb-2 rounded cursor-pointer" onClick={zoomIn}>+</div>
            <div className="bg-white p-2 text-2xl mb-2 rounded cursor-pointer" onClick={zoomOut}>-</div>
        </div>
    );
}

ZoomToolbar.propTypes = {
    zoomIn: PropTypes.func.isRequired,
    zoomOut: PropTypes.func.isRequired,
};

export default ZoomToolbar