export function checkIsAuthenticatedVK(handleLogin) {
    VK.Auth.getLoginStatus((resp) => {
        if (resp.status === 'connected') {
            handleLogin(resp.session.mid);
        }
    });
}