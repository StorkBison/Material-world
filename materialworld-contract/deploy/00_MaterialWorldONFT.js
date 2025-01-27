const LZ_ENDPOINTS = require( "../constants/layerzeroEndpoints.json" );

module.exports = async function ( { deployments, getNamedAccounts } ) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log( `>>> your address: ${ deployer }` );

    const lzEndpointAddress = LZ_ENDPOINTS[ hre.network.name ];
    console.log( `[${ hre.network.name }] Endpoint Address: ${ lzEndpointAddress }` );

    await deploy( "MaterialWorldONFT", {
        from: deployer,
        args: [ lzEndpointAddress ],
        log: true,
        waitConfirmations: 3,
        skipIfAlreadyDeployed: true,
    } );
    await hre.run( "verifyContract", { contract: "MaterialWorldONFT" } );
};

module.exports.tags = [ "MaterialWorldONFT" ];
