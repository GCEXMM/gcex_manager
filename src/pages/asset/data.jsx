import MUIBox from '../../components/MUIBox';
import MUITypography from '../../components/MUITypography';
import MUIAvatar from '../../components/MUIAvatar';
import team2 from '../../assets/images/team-1.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';

export default function data() {
  const Author = ({ image, name, email }) => (
    <MUIBox display="flex" alignItems="center" lineHeight={1}>
      <MUIAvatar src={image} name={name} size="sm" />
      <MUIBox ml={2} lineHeight={1}>
        <MUITypography display="block" variant="button" fontWeight="medium">
          {name}
        </MUITypography>
        <MUITypography variant="caption">{email}</MUITypography>
      </MUIBox>
    </MUIBox>
  );

  const Job = ({ title, description }) => (
    <MUIBox lineHeight={1} textAlign="left">
      <MUITypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MUITypography>
      <MUITypography variant="caption">{description}</MUITypography>
    </MUIBox>
  );

  return {
    columns: [
      { Header: 'author', accessor: 'author', width: '45%', align: 'left' },
      { Header: 'function', accessor: 'function', align: 'left' },
      { Header: 'status', accessor: 'status', align: 'center' },
      { Header: 'employed', accessor: 'employed', align: 'center' },
      { Header: 'action', accessor: 'action', align: 'center' },
    ],

    rows: [
      {
        author: (
          <Author image={team2} name="John Michael" email="john@creative-tim.com" />
        ),
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            offline
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            11/01/19
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            19/09/17
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            24/12/08
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />
        ),
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            04/10/21
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team2} name="John Michael" email="john@creative-tim.com" />
        ),
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            offline
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            11/01/19
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            19/09/17
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            24/12/08
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />
        ),
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            04/10/21
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
      {
        author: (
          <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />
        ),
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MUITypography variant="caption" color="text" fontWeight="medium">
            online
          </MUITypography>
        ),
        employed: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MUITypography>
        ),
        action: (
          <MUITypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MUITypography>
        ),
      },
    ],
  };
}
