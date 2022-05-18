use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use crate::state::State;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub denom_stable: String,
    // pub terrand_contract_address: String,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Register {
        address: Option<String>,
        combination: Vec<String>,
    }, //복권 등록
    Draw,
    Claim {
        address: Option<String>,
        lottery_id: u64,
    },
    SafeLock,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Config {},

    Balance { lottery_id: u64 },

    Combination { lottery_id: u64, address: String },

    Winner { lottery_id: u64 },

    GetJackpot { lottery_id: u64 },

    CountTicket { lottery_id: u64 },

    CountUser { lottery_id: u64 },

    JackpotBalance { lottery_id: u64 },

    JackpotCount { lottery_id: u64 },
}

pub type ConfigureResponse = State;
