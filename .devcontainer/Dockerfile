FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:16

# Start: NPM changed the rules about global installs...
# https://stackoverflow.com/questions/44633419/no-access-permission-error-with-npm-global-install-on-docker-image
# 👉 Security: do not use the `root` user.
ENV USER=node

# You can not use `${USER}` here, but reference `/home/node`.
ENV PATH="/home/node/.npm-global/bin:${PATH}"
# 👉 The `--global` install dir
ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"

# All subsequent commands are run as the `node` user.
USER "${USER}"

# Pre-create the target dir for global install.
RUN mkdir -p "${NPM_CONFIG_PREFIX}/lib"
RUN npm --global config set user "${USER}"
# End: NPM changed the rules about global installs...

RUN npm install -g @azure/static-web-apps-cli