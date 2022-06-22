// TODO: Define the types maybe swagger
export interface User {
  agent_id: number,
  agent_username: string,
  agent_type: number,
  payforce_agent_no: string,
  aggregator_code: string,
  full_name: string,
  email: string,
  phone: string,
  is_kyc_verified: boolean,
  is_first_time_login: boolean,
  is_migration_completed: boolean,
  passport: string,
  token: string,
  refresh_token: string,
  allow_commission_withdrawal: string,
  allow_sub_agent_to_use_k_y_cof_super_agent: string,
  campaign_id: number,
  wallet_balance: string,
  user_role: string | undefined,
  is_b_v_n_verified: boolean,
  otp_required: boolean,
  has_security_questions: boolean,
  agent_status: string | undefined,
  sponsor_name: string | undefined,
  sponsor_phone: string | undefined,
  transaction_limit: number,
  wants_insurance: boolean,
  is_pin_set: boolean,
  id_verify: number,
  address_verify: number,
  passport_verify: number,
  agent_virtual_account_dtos: string | undefined,
}


export interface SignupUser {
  agent_id: number;
  password: string;
  confirm_password: string;
  username: string;
  bvn: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  address: string;
  state: string;
  lga: string;
  date_of_birth: string;
  otp: string

}

export interface VerifyPhone {
  identifier: string;
  phone_number: number;
}

export interface PasswordReset {
  username: string;
}
