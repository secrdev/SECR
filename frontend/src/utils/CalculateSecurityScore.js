function CalculateSecurityScore(vulnCount, portCount) {
    const securityScore = math.round((portCount / vulnCount) * 100);
    if (securityScore > 100 || vulnCount === 0) {
        securityScore = 100;
        return securityScore;
    }
    return securityScore;
}