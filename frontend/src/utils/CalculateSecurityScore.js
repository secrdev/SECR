export default async function CalculateSecurityScore(portCount, vulnCount) {
    let securityScore = Math.round((portCount / vulnCount) * 100);
    if (securityScore > 100 || vulnCount === 0) {
        securityScore = 100;
        return securityScore;
    }
    return securityScore;
}