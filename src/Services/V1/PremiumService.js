import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const premiumGet = async () => {
    const query = window.location.search;
    const response = await Gateway.authGateway(
        "GET",
        `${V1.premiumplugin.premium_plugins}${query}`
    );
    return response;
};

const premiumFirst = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.premiumplugin.premium_plugins + "/" + data
    );
    return response;
};

const premiumDelete = async (data) => {
    const response = await Gateway.authGateway(
        "DELETE",
        V1.premiumplugin.premium_plugins + "/" + data
    );
    return response;
};

const premiumPost = async (data) => {
    const response = await Gateway.authGateway(
        "POST",
        V1.premiumplugin.premium_plugins,
        premiumPostBody(data)
    );
    return response;
};

const premiumPostBody = (data) => {
    let _data = {};
    _data.name = data.name;
    _data.slug = data.slug;
    _data.type = data.type.value;
    _data.current_version = data.current_version;
    _data.author = data.author;

    return JSON.stringify(_data);
};

const premiumPut = async (data, id) => {
    const response = await Gateway.authGateway(
        "PUT",
        `${V1.premiumplugin.premium_plugins}/${id}`,
        premiumPostBody(data.form)
    );
    return response;
};

const PremiumService = {
    premiumGet,
    premiumDelete,
    premiumFirst,
    premiumPost,
    premiumPut,
};

export default PremiumService;
