
let provider2 = 'wss://rinkeby.infura.io/ws'
let networkid = '4' // rinkeby
let web3 = new Web3(Web3.givenProvider || provider2, null, {})
// let schellingBuild = require('./build/contracts/Schelling2.json')
let schellingAbi = [
  {
    'constant': true,
    'inputs': [],
    'name': 'stakeGettingReward',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x0ec88d3f'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'nodes',
    'outputs': [
      {
        'name': 'id',
        'type': 'uint256'
      },
      {
        'name': 'stake',
        'type': 'uint256'
      },
      {
        'name': 'epochStaked',
        'type': 'uint256'
      },
      {
        'name': 'epochLastCommitted',
        'type': 'uint256'
      },
      {
        'name': 'epochLastRevealed',
        'type': 'uint256'
      },
      {
        'name': 'unstakeAfter',
        'type': 'uint256'
      },
      {
        'name': 'withdrawAfter',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x1c53c280'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'nodeIds',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x2b3c9efd'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'rewardPool',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x66666aa9'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'disputes',
    'outputs': [
      {
        'name': 'accWeight',
        'type': 'uint256'
      },
      {
        'name': 'median',
        'type': 'uint256'
      },
      {
        'name': 'lastVisited',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x828496d6'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalStake',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x8b0e9f3f'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'schAddress',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x8d0e52c0'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'voteWeights',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x8f37d0b4'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'numNodes',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x94ca304b'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'EPOCH',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xa0dc2758'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'totalStakeRevealed',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xab944638'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'c',
    'outputs': [
      {
        'name': 'COMMIT',
        'type': 'uint8'
      },
      {
        'name': 'REVEAL',
        'type': 'uint8'
      },
      {
        'name': 'PROPOSE',
        'type': 'uint8'
      },
      {
        'name': 'DISPUTE',
        'type': 'uint8'
      },
      {
        'name': 'PENALTY_NOT_REVEAL_NUM',
        'type': 'uint256'
      },
      {
        'name': 'PENALTY_NOT_REVEAL_DENOM',
        'type': 'uint256'
      },
      {
        'name': 'PENALTY_NOT_IN_ZONE_NUM',
        'type': 'uint256'
      },
      {
        'name': 'PENALTY_NOT_IN_ZONE_DENOM',
        'type': 'uint256'
      },
      {
        'name': 'MIN_STAKE',
        'type': 'uint256'
      },
      {
        'name': 'BLOCK_REWARD',
        'type': 'uint256'
      },
      {
        'name': 'REVEAL_REWARD',
        'type': 'uint256'
      },
      {
        'name': 'SAFETY_MARGIN_LOWER',
        'type': 'uint256'
      },
      {
        'name': 'UNSTAKE_LOCK_PERIOD',
        'type': 'uint256'
      },
      {
        'name': 'WITHDRAW_LOCK_PERIOD',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xc3da42b8'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'STATE',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xc486456c'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'votes',
    'outputs': [
      {
        'name': 'value',
        'type': 'uint256'
      },
      {
        'name': 'weight',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xc6e36a32'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'commitments',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xd13e2e60'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'blocks',
    'outputs': [
      {
        'name': 'proposerId',
        'type': 'uint256'
      },
      {
        'name': 'median',
        'type': 'uint256'
      },
      {
        'name': 'iteration',
        'type': 'uint256'
      },
      {
        'name': 'biggestStake',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xf25b3f99'
  },
  {
    'inputs': [
      {
        'name': '_schAddress',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
    'signature': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'nodeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Staked',
    'type': 'event',
    'signature': '0x925435fa7e37e5d9555bb18ce0d62bb9627d0846942e58e5291e9a2dded462ed'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'nodeId',
        'type': 'uint256'
      }
    ],
    'name': 'Unstaked',
    'type': 'event',
    'signature': '0x11725367022c3ff288940f4b5473aa61c2da6a24af7363a1128ee2401e8983b2'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'nodeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Withdrew',
    'type': 'event',
    'signature': '0xe30055f80fbe7b2543e52870ba638ff9e75c7471da9cb6d9eb5a97379195b1ac'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'nodeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'commitment',
        'type': 'bytes32'
      }
    ],
    'name': 'Committed',
    'type': 'event',
    'signature': '0x68e0867601a98978930107aee7f425665e61edd70ca594c68ca5da9e81f84c29'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'y',
        'type': 'uint256'
      }
    ],
    'name': 'Y',
    'type': 'event',
    'signature': '0xa63f6e5f3b8cca289dfc8649ede8fbf4eeb9991f44d7bc70c3fb53b128521a58'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'nodeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Revealed',
    'type': 'event',
    'signature': '0x9a5a126d5a9736641cc82adfebab5f62e9429e7963b9810cffdc9184c5fda2a7'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'median',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'iteration',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'biggestStakerId',
        'type': 'uint256'
      }
    ],
    'name': 'Proposed',
    'type': 'event',
    'signature': '0xb298ddd893bd0abdc6d28df66c6d5009cdd112df801fa1b176048bdab1cd5e77'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'stake',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x7b0472f0'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      }
    ],
    'name': 'unstake',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x2e17de78'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x2e1a7d4d'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'name': 'commitment',
        'type': 'bytes32'
      }
    ],
    'name': 'commit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xf2f03877'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'name': 'value',
        'type': 'uint256'
      },
      {
        'name': 'secret',
        'type': 'bytes32'
      },
      {
        'name': 'stakerAddress',
        'type': 'address'
      }
    ],
    'name': 'reveal',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x6aadffa8'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'iteration',
        'type': 'uint256'
      },
      {
        'name': 'biggestStakerId',
        'type': 'uint256'
      },
      {
        'name': 'nodeId',
        'type': 'uint256'
      }
    ],
    'name': 'isElectedProposer',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x1d69ff9b'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'name': 'median',
        'type': 'uint256'
      },
      {
        'name': 'iteration',
        'type': 'uint256'
      },
      {
        'name': 'biggestStakerId',
        'type': 'uint256'
      }
    ],
    'name': 'propose',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x2c3b4f27'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      },
      {
        'name': 'sorted',
        'type': 'uint256[]'
      }
    ],
    'name': 'giveSorted',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xab45c6b5'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      }
    ],
    'name': 'resetDispute',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x5ce8772f'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      }
    ],
    'name': 'proposeAlt',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x1e8fcfe5'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getEpoch',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x757991a8'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getState',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x1865c57d'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'numBlocks',
        'type': 'uint8'
      },
      {
        'name': 'max',
        'type': 'uint256'
      },
      {
        'name': 'seed',
        'type': 'bytes32'
      }
    ],
    'name': 'prng',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x5075dbfb'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'numBlocks',
        'type': 'uint8'
      },
      {
        'name': 'seed',
        'type': 'bytes32'
      }
    ],
    'name': 'prngHash',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xb07ceab8'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'epoch',
        'type': 'uint256'
      }
    ],
    'name': 'setEpoch',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x0ceb2cef'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'state',
        'type': 'uint256'
      }
    ],
    'name': 'setState',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xa9e966b7'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'dum',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x6bf844e9'
  }
]

let dataset = []
let schelling = new web3.eth.Contract(schellingAbi, '0xef66f3dc0850a6aec2cdbd024a36d61fe4969c70',
  {transactionConfirmationBlocks: 1,
    defaultGas: 500000,
    defaultGasPrice: 2000000000})

// let simpleTokenBuild = require('./build/contracts/SimpleToken.json')
// let simpleTokenAbi = simpleTokenBuild['abi']
// let simpleToken = new web3.eth.Contract(simpleTokenAbi, simpleTokenBuild['networks'][networkid].address,
//   {transactionConfirmationBlocks: 1,
//     defaultGas: 500000,
//     defaultGasPrice: 2000000000})

async function processProposals (proposals) {
  for (let i = 0; i < proposals.length; i++) {
    dataset.push(Number(proposals[i].returnValues.median) / 100)
    console.log(Number(proposals[i].returnValues.median) / 100)
  }
}

async function processReveals (reveals) {
  for (let i = 0; i < reveals.length; i++) {
    console.log(Number(reveals[i].returnValues.nodeId), Number(reveals[i].returnValues.value) / 100)
  }
}
async function main () {
  let reveals = await schelling.getPastEvents('Revealed', {
    fromBlock: 4657000,
    toBlock: 'latest'
  })
  let proposals = await schelling.getPastEvents('Proposed', {
    fromBlock: 4657000,
    toBlock: 'latest'
  })
  await processProposals(proposals)
  await processReveals(reveals)
}

main()

