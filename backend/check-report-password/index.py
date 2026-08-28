import json
import os

# Каждый клиентский проект имеет свой пароль в отдельном секрете.
# При добавлении нового проекта: завести секрет REPORT_PASSWORD_<PROJECT> и добавить строку сюда.
PROJECT_ENV_MAP = {
    'elmopro': 'REPORT_PASSWORD',
}


def handler(event: dict, context) -> dict:
    """Проверяет пароль доступа к отчётам конкретного клиентского проекта (POST {project: string, password: string})"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Authorization',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Bad request'})}

    project = body.get('project', '')
    password = body.get('password', '')

    env_name = PROJECT_ENV_MAP.get(project)
    if not env_name:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Unknown project'})}

    correct = os.environ.get(env_name, '')

    if not correct:
        return {'statusCode': 500, 'headers': headers, 'body': json.dumps({'error': 'Password not configured'})}

    if password == correct:
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': True})}

    return {'statusCode': 401, 'headers': headers, 'body': json.dumps({'success': False, 'error': 'Неверный пароль'})}