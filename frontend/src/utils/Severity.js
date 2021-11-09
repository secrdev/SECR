/*
    How Severity scoring (total % out of 100) will initially work:
        - Avg. Severity Score (CWE) * 10
        - Factor in Quantity?
    Conditions relative to UI components:
        if score < 50%:
            - Red Gradient
        elseif score >= 50%:
            - Green Gradient
        elseif score nil:
            - Green Gradient + Special message showing no found vulnerabilities in infra
*/