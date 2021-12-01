

const Container = ({ children, paddingTopBottom=0, paddingLeftRight=10 }) => {


    const styles = {
        maxWidth: '1280px',
        margin: '0 auto',
        height: 'auto',
        position: 'relative',
        padding: `${paddingTopBottom}px ${paddingLeftRight}px`
        
    }


    return (
        <div style={{ ...styles }}>
            {children}
        </div>
    )

}

export default Container