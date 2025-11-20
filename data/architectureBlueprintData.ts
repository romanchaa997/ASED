import { ArchitectureSection } from '../types';

export const architectureBlueprintData: ArchitectureSection[] = [
  {
    id: 'schemes',
    title: 'Architectural Schemes (Схемы)',
    content: [
      "To visualize this complex system, a layered approach inspired by the C4 model is recommended. This allows communication of the architecture to different stakeholders at varying levels of detail.",
      {
        language: 'mermaid',
        code: `graph TD
    subgraph Audityzer/Auditorsec Ecosystem
        A[API Gateway]
    end

    U[Users/Auditors] --> A
    Z[Zapier/Webhooks] --> A
    J[Jira/SaaS Tools] --> A
    AI[AbacusAI/AI Platforms] --> A
    F[Fintech/Binance] --> A
    W3[Web3 Networks] --> A

    A --> U
    A --> Z
    A --> J`
      },
      "**Container Diagram:** This view shows the primary microservices and their communication patterns. Key components include a central API Gateway (Kong/Tyk), core services for Integration (Node.js), Analytics (Python), and High-Throughput work (Go), and various Data Stores (PostgreSQL, Redis).",
      "**CI/CD Pipeline Scheme:** A robust pipeline is critical for security and velocity: `Git Commit` → `Static Analysis` → `Unit & Integration Tests` → `SAST/DAST Security Scan` → `Build Container Images` → `Deploy to Staging` → `E2E Tests` → `Manual Approval` → `Deploy to Production` → `Monitoring`."
    ]
  },
  {
    id: 'use-cases',
    title: 'Concrete Use Cases (Конкретные кейсы)',
    content: [
      "**Use Case 1: Automated Vulnerability Audit from Jira**\n- **Trigger**: A developer moves a Jira ticket to the 'Ready for Audit' column.\n- **Flow**: A Zapier webhook sends ticket details to the API Gateway, which routes to the Node.js Integration Service. This service fetches the code, queues an audit task. The Python Analytics Service consumes the task, runs security tools (Slither, Mythril) and custom ML models, and posts the results back to the Jira ticket via the Integration Service.",
      "**Use Case 2: Resilient Web3 Connection with Failover**\n- **Trigger**: The Go Worker needs to confirm a transaction.\n- **Flow**: It attempts to connect to Infura. If it fails, the fallback mechanism automatically tries a secondary provider like Alchemy. Upon any failover, a metric is immediately sent to Prometheus, triggering an alert in Grafana to notify the team of provider degradation without halting operations.",
      {
        language: 'python',
        code: `from web3 import Web3, HTTPProvider
RPC_LIST = ["URL1_INFURA", "URL2_ALCHEMY", "localhost"]
def get_web3_with_fallback():
    for rpc in RPC_LIST:
        try:
            w3 = Web3(HTTPProvider(rpc))
            if w3.is_connected():
                return w3
        except Exception:
            continue
    raise Exception('No working RPC found')`
      }
    ]
  },
  {
    id: 'security-bp',
    title: 'Best Practices: Security',
    content: [
      "**1. Zero-Trust Networking**: Use a service mesh (Istio, Linkerd) in Kubernetes to enforce mutual TLS (mTLS) for all service-to-service communication.",
      "**2. Secrets Management**: Never store secrets in code or environment variables. Use a dedicated tool like HashiCorp Vault or a cloud provider's equivalent (e.g., AWS Secrets Manager).",
      "**3. Principle of Least Privilege**: Each microservice must have the absolute minimum permissions required to perform its function.",
      "**4. Immutable Infrastructure**: Treat container images as immutable artifacts. Never SSH into a running container. Update the Dockerfile, build a new image, and redeploy.",
      "**5. Supply Chain Security**: Use tools like Sigstore to sign container images. Regularly scan all dependencies for vulnerabilities within the CI pipeline."
    ]
  },
  {
    id: 'cicd-bp',
    title: 'Best Practices: CI/CD',
    content: [
      "**1. GitOps as the Source of Truth**: Use ArgoCD or Flux. Git repositories should define the desired state of both application code and infrastructure manifests.",
      "**2. Progressive Delivery**: Avoid 'big bang' deployments. Use canary or blue-green strategies, controlled by the API Gateway or service mesh, to roll out changes to a small subset of traffic first.",
      "**3. Dynamic Staging Environments**: Automatically spin up a complete, isolated environment for each pull request to enable thorough end-to-end testing before merging.",
      "**4. Leverage Gemini for CI/CD Enhancement**:\n- **AI-Powered Code Review**: Create a GitHub Action that uses the Gemini API to review PRs, summarize changes, and suggest improvements.\n- **Automated Incident Post-mortems**: On failure, trigger a workflow to feed logs and metrics into Gemini to generate a draft incident report.\n- **Natural Language Querying for Docs**: Integrate Gemini to allow developers to ask natural language questions about the architecture."
    ]
  }
];
