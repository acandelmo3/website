export const styles = {
    navBar: {
        height: '56px',
        background: '#222',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        flexShrink: 0,
        zIndex: 2
    },
    globeDiv: {
        position: 'fixed',
        top: '56px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 56px)',
        zIndex: 0,
    },
    overlay: {
        width: '300px',
        background: 'rgba(34, 34, 34, 0.25)',
        color: 'white',
        zIndex: 1,
        overflowY: 'hidden',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    logoDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        margin: '24px 0',
    }
}