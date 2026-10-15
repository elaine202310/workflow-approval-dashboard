export type UserRole = 'Employee' | 'Manager' | 'Admin'
export type RequestStatus = 'Draft' | 'Pending' | 'Approved' | 'Rejected'
export type RequestPriority = 'Low' | 'Medium' | 'High'
export type RequestType = 'Leave' | 'Expense' | 'Purchase' | 'IT Access' | 'Contract'
export type ApprovalAction = 'Created' | 'Submitted' | 'Approved' | 'Rejected'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  department: string
}

export interface ApprovalHistoryEntry {
  id: string
  actorId: string
  actorName: string
  actorRole: UserRole
  action: ApprovalAction
  timestamp: string
  note?: string
}

export interface ApprovalRequest {
  id: string
  requestNumber: string
  title: string
  applicantId: string
  applicantName: string
  department: string
  type: RequestType
  priority: RequestPriority
  description: string
  expectedCompletionDate: string
  submittedAt: string | null
  status: RequestStatus
  approverId: string | null
  approverName: string | null
  attachments: string[]
  history: ApprovalHistoryEntry[]
}

export interface ApiErrorResponse {
  message: string
  statusCode: number
}
