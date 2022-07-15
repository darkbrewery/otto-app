/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OtterRewardManager,
  OtterRewardManagerInterface,
} from "../OtterRewardManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nextPayoutTime",
        type: "uint256",
      },
    ],
    name: "NextPayoutTime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalUsdPlus",
        type: "uint256",
      },
    ],
    name: "Payout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nextPayoutTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payoutPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payoutTimeRange",
        type: "uint256",
      },
    ],
    name: "PayoutTimesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "portfolioManager",
        type: "address",
      },
    ],
    name: "PortfolioManagerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "clamPond",
    outputs: [
      {
        internalType: "contract IClamPond",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clamPond_",
        type: "address",
      },
      {
        internalType: "address",
        name: "pearlBank_",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdc_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ocUsdPlus_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nextPayoutTime_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPayoutTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ocUsdPlus",
    outputs: [
      {
        internalType: "contract IOtterWrappedUsdPlusToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "payoutPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payoutTimeRange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pearlBank",
    outputs: [
      {
        internalType: "contract IPearlBank",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "portfolioManager",
    outputs: [
      {
        internalType: "contract IPortfolioManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nextPayoutTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payoutPeriod_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payoutTimeRange_",
        type: "uint256",
      },
    ],
    name: "setPayoutTimes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "portfolioManager_",
        type: "address",
      },
    ],
    name: "setPortfolioManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611e1f61004c600039600081816105b6015281816105f6015281816106ab015281816106eb015261077a0152611e1f6000f3fe6080604052600436106101815760003560e01c806363bd1d4a116100d1578063ce1aa76b1161008a578063de95fe6811610064578063de95fe6814610431578063ec87621c14610452578063f3869e8d14610486578063f7013ef6146104a657600080fd5b8063ce1aa76b146103e3578063cecbbc07146103fa578063d547741f1461041157600080fd5b806363bd1d4a1461034d5780636d8ebaa8146103625780638456cb591461037957806391d148541461038e578063a217fddf146103ae578063a440b21a146103c357600080fd5b80633f4ba83a1161013e5780634f5ab74d116101185780634f5ab74d146102dd57806352d1902d146102fe5780635c975abb14610313578063620b75df1461032c57600080fd5b80633f4ba83a146102945780634091b983146102a95780634f1ef286146102ca57600080fd5b806301ffc9a714610186578063248a9ca3146101bb5780632f2ff15d146101f957806336568abe1461021b5780633659cfe61461023b5780633e413bee1461025b575b600080fd5b34801561019257600080fd5b506101a66101a13660046118fd565b6104c6565b60405190151581526020015b60405180910390f35b3480156101c757600080fd5b506101eb6101d6366004611927565b60009081526065602052604090206001015490565b6040519081526020016101b2565b34801561020557600080fd5b5061021961021436600461195c565b6104fd565b005b34801561022757600080fd5b5061021961023636600461195c565b610528565b34801561024757600080fd5b50610219610256366004611988565b6105ab565b34801561026757600080fd5b506101625461027c906001600160a01b031681565b6040516001600160a01b0390911681526020016101b2565b3480156102a057600080fd5b5061021961068b565b3480156102b557600080fd5b506101605461027c906001600160a01b031681565b6102196102d83660046119b9565b6106a0565b3480156102e957600080fd5b506101635461027c906001600160a01b031681565b34801561030a57600080fd5b506101eb61076d565b34801561031f57600080fd5b5061012d5460ff166101a6565b34801561033857600080fd5b506101615461027c906001600160a01b031681565b34801561035957600080fd5b50610219610820565b34801561036e57600080fd5b506101eb6101645481565b34801561038557600080fd5b5061021961086f565b34801561039a57600080fd5b506101a66103a936600461195c565b610882565b3480156103ba57600080fd5b506101eb600081565b3480156103cf57600080fd5b506102196103de366004611988565b6108ad565b3480156103ef57600080fd5b506101eb6101655481565b34801561040657600080fd5b506101eb6101665481565b34801561041d57600080fd5b5061021961042c36600461195c565b610963565b34801561043d57600080fd5b5061015f5461027c906001600160a01b031681565b34801561045e57600080fd5b506101eb7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b34801561049257600080fd5b506102196104a1366004611a7b565b610989565b3480156104b257600080fd5b506102196104c1366004611aa7565b610af1565b60006001600160e01b03198216637965db0b60e01b14806104f757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152606560205260409020600101546105198133610c22565b6105238383610c86565b505050565b6001600160a01b038116331461059d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105a78282610d0c565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156105f45760405162461bcd60e51b815260040161059490611b03565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661063d600080516020611da3833981519152546001600160a01b031690565b6001600160a01b0316146106635760405162461bcd60e51b815260040161059490611b4f565b61066c81610d73565b6040805160008082526020820190925261068891839190610d7e565b50565b610696600033610c22565b61069e610ef8565b565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106e95760405162461bcd60e51b815260040161059490611b03565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610732600080516020611da3833981519152546001600160a01b031690565b6001600160a01b0316146107585760405162461bcd60e51b815260040161059490611b4f565b61076182610d73565b6105a782826001610d7e565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461080d5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610594565b50600080516020611da383398151915290565b61012d5460ff16156108675760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610594565b61069e610f8d565b61087a600033610c22565b61069e6113a9565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6108b8600033610c22565b6001600160a01b03811661090e5760405162461bcd60e51b815260206004820152601860248201527f5a65726f2061646472657373206e6f7420616c6c6f77656400000000000000006044820152606401610594565b61016180546001600160a01b0319166001600160a01b0383169081179091556040519081527ff7b449fcd5cfb7379dcd34cb69428dd9f882033b15be33d83b42d91daa28eeb79060200160405180910390a150565b60008281526065602052604090206001015461097f8133610c22565b6105238383610d0c565b610994600033610c22565b826109e15760405162461bcd60e51b815260206004820181905260248201527f5a65726f205f6e6578745061796f757454696d65206e6f7420616c6c6f7765646044820152606401610594565b81610a2e5760405162461bcd60e51b815260206004820152601e60248201527f5a65726f205f7061796f7574506572696f64206e6f7420616c6c6f77656400006044820152606401610594565b808311610a995760405162461bcd60e51b815260206004820152603360248201527f5f6e6578745061796f757454696d652073686f7564206265206d6f7265207468604482015272616e205f7061796f757454696d6552616e676560681b6064820152608401610594565b61016483905561016582905561016681905560408051848152602081018490529081018290527f182705f356ea3bbbd12c7b4761586a554d391a7703345f81166bbe3f946444999060600160405180910390a1505050565b600054610100900460ff16610b0c5760005460ff1615610b10565b303b155b610b735760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610594565b600054610100900460ff16158015610b95576000805461ffff19166101011790555b610b9d611426565b610ba5611492565b61016080546001600160a01b038089166001600160a01b03199283161790925561015f805488841690831617905561016280548784169083161790556101638054928616929091169190911790556101648290556201518061016555610384610166558015610c1a576000805461ff00191690555b505050505050565b610c2c8282610882565b6105a757610c44816001600160a01b031660146114c1565b610c4f8360206114c1565b604051602001610c60929190611bc7565b60408051601f198184030181529082905262461bcd60e51b825261059491600401611c3c565b610c908282610882565b6105a75760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610cc83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610d168282610882565b156105a75760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610688600033610c22565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610db15761052383611664565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dea57600080fd5b505afa925050508015610e1a575060408051601f3d908101601f19168201909252610e1791810190611c6f565b60015b610e7d5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610594565b600080516020611da38339815191528114610eec5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610594565b50610523838383611700565b61012d5460ff16610f425760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610594565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6101645461016654610f9f9042611c9e565b1015610fa757565b61016160009054906101000a90046001600160a01b03166001600160a01b031663c6bbf4cb6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610ff857600080fd5b505af115801561100c573d6000803e3d6000fd5b5050610162546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a082319060240160206040518083038186803b15801561105757600080fd5b505afa15801561106b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108f9190611c6f565b610162546101635460405163095ea7b360e01b81526001600160a01b03918216600482015260248101849052929350169063095ea7b390604401602060405180830381600087803b1580156110e357600080fd5b505af11580156110f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111b9190611cb6565b506101635460405163140e25ad60e31b8152600481018390526000916001600160a01b03169063a0712d6890602401602060405180830381600087803b15801561116457600080fd5b505af1158015611178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119c9190611c6f565b6101635461015f5460405163095ea7b360e01b81526001600160a01b03918216600482015260248101849052929350169063095ea7b390604401602060405180830381600087803b1580156111f057600080fd5b505af1158015611204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112289190611cb6565b5061015f54610163546040516309feb8f560e41b81526001600160a01b03918216600482015260248101849052911690639feb8f5090604401600060405180830381600087803b15801561127b57600080fd5b505af115801561128f573d6000803e3d6000fd5b5050505061016060009054906101000a90046001600160a01b03166001600160a01b031663af14052c6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156112e457600080fd5b505af11580156112f8573d6000803e3d6000fd5b505050507f22427047e1a674a9aff59700a2c8d00ea96e017ddf9236690bdedf1f21f28d9d8260405161132d91815260200190565b60405180910390a15b61016654610164546113489190611cd8565b42106113695761016554610164546113609190611c9e565b61016455611336565b7f6654b7187a0560c4c326844142156c2adf52738d0a615487e0e2a5cd9823c2c46101645460405161139d91815260200190565b60405180910390a15050565b61012d5460ff16156113f05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610594565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f703390565b600054610100900460ff1661144d5760405162461bcd60e51b815260040161059490611cef565b61145561172b565b61145d61172b565b611468600033611752565b61069e7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0833611752565b600054610100900460ff166114b95760405162461bcd60e51b815260040161059490611cef565b61069e61175c565b606060006114d0836002611d3a565b6114db906002611c9e565b67ffffffffffffffff8111156114f3576114f36119a3565b6040519080825280601f01601f19166020018201604052801561151d576020820181803683370190505b509050600360fc1b8160008151811061153857611538611d59565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061156757611567611d59565b60200101906001600160f81b031916908160001a905350600061158b846002611d3a565b611596906001611c9e565b90505b600181111561160e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106115ca576115ca611d59565b1a60f81b8282815181106115e0576115e0611d59565b60200101906001600160f81b031916908160001a90535060049490941c9361160781611d6f565b9050611599565b50831561165d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610594565b9392505050565b6001600160a01b0381163b6116d15760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610594565b600080516020611da383398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61170983611790565b6000825111806117165750805b156105235761172583836117d0565b50505050565b600054610100900460ff1661069e5760405162461bcd60e51b815260040161059490611cef565b6105a78282610c86565b600054610100900460ff166117835760405162461bcd60e51b815260040161059490611cef565b61012d805460ff19169055565b61179981611664565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6118385760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610594565b600080846001600160a01b0316846040516118539190611d86565b600060405180830381855af49150503d806000811461188e576040519150601f19603f3d011682016040523d82523d6000602084013e611893565b606091505b50915091506118bb8282604051806060016040528060278152602001611dc3602791396118c4565b95945050505050565b606083156118d357508161165d565b8251156118e35782518084602001fd5b8160405162461bcd60e51b81526004016105949190611c3c565b60006020828403121561190f57600080fd5b81356001600160e01b03198116811461165d57600080fd5b60006020828403121561193957600080fd5b5035919050565b80356001600160a01b038116811461195757600080fd5b919050565b6000806040838503121561196f57600080fd5b8235915061197f60208401611940565b90509250929050565b60006020828403121561199a57600080fd5b61165d82611940565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156119cc57600080fd5b6119d583611940565b9150602083013567ffffffffffffffff808211156119f257600080fd5b818501915085601f830112611a0657600080fd5b813581811115611a1857611a186119a3565b604051601f8201601f19908116603f01168101908382118183101715611a4057611a406119a3565b81604052828152886020848701011115611a5957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600060608486031215611a9057600080fd5b505081359360208301359350604090920135919050565b600080600080600060a08688031215611abf57600080fd5b611ac886611940565b9450611ad660208701611940565b9350611ae460408701611940565b9250611af260608701611940565b949793965091946080013592915050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b60005b83811015611bb6578181015183820152602001611b9e565b838111156117255750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611bff816017850160208801611b9b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611c30816028840160208801611b9b565b01602801949350505050565b6020815260008251806020840152611c5b816040850160208701611b9b565b601f01601f19169190910160400192915050565b600060208284031215611c8157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611cb157611cb1611c88565b500190565b600060208284031215611cc857600080fd5b8151801515811461165d57600080fd5b600082821015611cea57611cea611c88565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611d5457611d54611c88565b500290565b634e487b7160e01b600052603260045260246000fd5b600081611d7e57611d7e611c88565b506000190190565b60008251611d98818460208701611b9b565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b7b20b5640f78934c70d1d738d765fc8da24d2e9b344275a5df6876cda82f10f64736f6c63430008090033";

type OtterRewardManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OtterRewardManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OtterRewardManager__factory extends ContractFactory {
  constructor(...args: OtterRewardManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OtterRewardManager> {
    return super.deploy(overrides || {}) as Promise<OtterRewardManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OtterRewardManager {
    return super.attach(address) as OtterRewardManager;
  }
  override connect(signer: Signer): OtterRewardManager__factory {
    return super.connect(signer) as OtterRewardManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OtterRewardManagerInterface {
    return new utils.Interface(_abi) as OtterRewardManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OtterRewardManager {
    return new Contract(address, _abi, signerOrProvider) as OtterRewardManager;
  }
}
