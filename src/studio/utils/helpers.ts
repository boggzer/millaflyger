import { useMemo, useState } from 'react';

export function UpdatePost(props) {
    const [status, setStatus] = useState('pending');

    const label = useMemo(() => {
        switch (status) {
            case 'success':
                return 'Updated';
            case 'error':
                return 'Something went wrong';
            default:
                return 'Update blog';
        }
    }, [status]);

    if (props.type !== 'movie') {
        return null;
    }

    return {
        label,
        onHandle: async () => {
            // this gets called when the button is clicked
            try {
                await revalidatePaths([`/projects/${props.draft.slug.current}`, '/projects']);

                setStatus('success');
            } catch (err) {
                setStatus('error');
            } finally {
                // Signal that the action is completed
                props.onComplete();
            }
        },
    };
}

async function revalidatePaths(paths: string[]) {
    try {
        const endpoint = new URL('millaflyger.com');

        endpoint.searchParams.append('paths', paths.join(','));
        endpoint.searchParams.append('secret', process.env.SANITY_STUDIO_API_ROUTE_TOKEN);

        return fetch(endpoint.href);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return null;
    }
}