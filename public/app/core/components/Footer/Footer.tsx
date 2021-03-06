import React, { FC } from 'react';

interface Props {
  appName: string;
  buildVersion: string;
  buildCommit: string;
  newGrafanaVersionExists: boolean;
  newGrafanaVersion: string;
}

export const Footer: FC<Props> = React.memo(
  ({ appName, buildVersion, buildCommit, newGrafanaVersionExists, newGrafanaVersion }) => {
    return (
      <footer className="footer">
        <div className="text-center">
          <ul>
            <li>
              <a href="http://doc.petrel.gux.space" target="_blank" rel="noopener">
                <i className="fa fa-file-code-o" /> Docs
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
);

export default Footer;
